import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { whoAreYou, message, name, email, phoneNumber, country, city, zipCode } = await req.json();
  
  // Process file upload
  // let fileUrl = ""; 
  // const file = req.files && req.files.file;
  // if (file) {
  //   fileUrl = "path/to/uploaded/file"; 
  // }

  // Generate a dummy file path (replace this with your actual file upload logic)
  const fileUrl = "/path/to/dummy/file";

  try {
    await connectDB();
    await Contact.create({ whoAreYou, message, name, file:fileUrl, email, phoneNumber, country, city, zipCode });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}


// export async function POST(req) {
//   const { whoAreYou, message, name, file, email, phoneNumber, country, city, zipCode } = await req.formData();

//   try {
//     await connectDB();
//     await Contact.create({ whoAreYou, message, name, file, email, phoneNumber, country, city, zipCode });

//     return NextResponse.json({
//       msg: ["Message sent successfully"],
//       success: true,
//     });
//   } catch (error) {
//     if (error instanceof mongoose.Error.ValidationError) {
//       let errorList = [];
//       for (let e in error.errors) {
//         errorList.push(error.errors[e].message);
//       }
//       console.log(errorList);
//       return NextResponse.json({ msg: errorList });
//     } else {
//       console.error(error); // Log the error for debugging
//       return NextResponse.json({ msg: ["Unable to send message."] });
//     }
//   }
// }




// import connectDB from "@/app/lib/mongodb";
// import Contact from "@/app/models/contact";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";

// export async function POST(req) {
//   const { whoAreYou, message, name, file, email, phoneNumber, country, city, zipCode } = await req.formData();

//   try {
//     await connectDB();
//     await Contact.create({ whoAreYou, message, name, file, email, phoneNumber, country, city, zipCode });

//     return NextResponse.json({
//       msg: ["Message sent successfully"],
//       success: true,
//     }, { headers: { "Content-Type": "application/json" } });
//   } catch (error) {
//     if (error instanceof mongoose.Error.ValidationError) {
//       let errorList = [];
//       for (let e in error.errors) {
//         errorList.push(error.errors[e].message);
//       }
//       console.log(errorList);
//       return NextResponse.json({ msg: errorList }, { headers: { "Content-Type": "application/json" } });
//     } else {
//       return NextResponse.json({ msg: ["Unable to send message."] }, { headers: { "Content-Type": "application/json" } });
//     }
//   }
// }

