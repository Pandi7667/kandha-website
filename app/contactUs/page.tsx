"use client";

import { useState, FormEvent, ChangeEvent } from "react";

const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" },
    { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea", code: "KP" },
    { name: "Korea", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Lao People's Democratic Republic", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia", code: "FM" },
    { name: "Moldova", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States of America", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" },
    { name: "Viet Nam", code: "VN" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" }
];

interface FormData {
    whoAreYou?: string;
    message?: string;
    file?: string;
    name?: string;
    email?: string;
    phoneNumber?: string;
    country?: string;
    city?: string;
    zipCode?: string;
}

const Contact_Us = () => {
    const [whoAreYou, setWhoAreYou] = useState("");
    const [message, setMessage] = useState("");
    const [file, setFile] = useState<File | null>(null); // Changed to accept File object
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [error, setError] = useState<string[]>([]);
    const [success, setSuccess] = useState(false);

    const [showFileInput, setShowFileInput] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setWhoAreYou(value);
        // Show file input if "Independent" is selected
        if (value === "Independent") {
            setShowFileInput(true);
        } else {
            setShowFileInput(false);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmitted(true);

        const formData = new FormData();
        formData.append('whoAreYou', whoAreYou);
        formData.append('message', message);
        if (file) formData.append('file', file);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('country', country);
        formData.append('city', city);
        formData.append('zipCode', zipCode);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                whoAreYou,
                message,
                file,
                name,
                email,
                phoneNumber,
                country,
                city,
                zipCode
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setWhoAreYou("");
            setMessage("");
            setFile(null);
            setName("");
            setEmail("");
            setPhoneNumber("");
            setCountry("");
            setCity("");
            setZipCode("");
            setSubmitted(false);
        }
    };

    return (
        <div className="bg-[#f2f0f1]">
            <div className="line-gradient relative inset-x-0 bottom-0 w-full md:h-2 h-1 mb-5"></div>
            <div className="flex justify-center items-center rounded-2xl mx-auto md:w-[60%] bg-[#dfe5eb] mt-10">
                <form onSubmit={handleSubmit} className="space-y-4 md:w-full p-7">
                    <div>
                        <label className="font-bold text-3xl">Contact Us</label>
                        <label htmlFor="whoAreYou" className="block mt-10">Who are you? *</label>
                        <select
                            onChange={(e) => handleChange(e)}
                            id="whoAreYou"
                            name="whoAreYou"
                            value={whoAreYou}
                            className="block w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Select Option</option>
                            <option value="Independent">Independent Consultant</option>
                            <option value="Business">Business looking to work with Kandha</option>
                        </select>
                        {/* Error handling */}
                        {submitted && !whoAreYou && <p className="text-red-500">Choose an option.</p>}
                    </div>
                    <div>
                        <label htmlFor="message" className="block">Anything you’d like to specifically chat about? *</label>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            name="message"
                            value={message}
                            placeholder="Message"
                            className="block w-full p-2 border border-gray-300 rounded"
                        ></textarea>
                        {/* Error handling */}
                        {submitted && !message && <p className="text-red-500">Enter an answer.</p>}
                    </div>

                    {showFileInput && (
                        <div>
                            {/* Render file input only when "Independent" is selected */}
                            <label htmlFor="file" className="block mb-2">If you&apos;re keen to work with us, please upload the file here. *</label>
                            <input
                                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                                type="file"
                                id="file"
                                name="file"
                                accept=".pdf,.doc,.docx"
                                className="p-2 border rounded-full "
                            />
                            {/* <label htmlFor="file" className="px-5 w-full p-2 rounded-full bg-black text-white cursor-pointer">
                                     + Choose File
                                </label> */}                       
                            {submitted && !file && <p className="text-red-500">This field is required</p>}
                            {file && file.size > 5 * 1024 * 1024 && <p className="text-red-500">File size should be less than 5 MB</p>}
                        </div>
                    )}

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="name" className="block">Name *</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                placeholder="Name"
                                className="block w-full p-2 border border-gray-300 rounded"
                            />
                            {submitted && !name && <p className="text-red-500">Enter an answer.</p>}
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="email" className="block">Email *</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                placeholder="Email"
                                className="block w-full p-2 border border-gray-300 rounded"
                            />
                            {submitted && !email && <p className="text-red-500">Enter an email address.</p>}
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="phoneNumber" className="block">Phone Number *</label>
                            <input
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                value={phoneNumber}
                                placeholder="Phone Number"
                                className="block w-full p-2 border border-gray-300 rounded"
                            />
                            {submitted && !phoneNumber && <p className="text-red-500">Enter a phone number.</p>}
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="country" className="block">Country *</label>
                            <select
                                onChange={(e) => setCountry(e.target.value)}
                                id="country"
                                name="country"
                                value={country}
                                className="block w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="">Select Option</option>
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                            {submitted && !country && <p className="text-red-500">Choose an option.</p>}
                        </div>

                    </div>
                    {/* Add more fields based on your requirements */}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="city" className="block">City *</label>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                id="city"
                                name="city"
                                type="text"
                                value={city}
                                placeholder="City"
                                className="block w-full p-2 border border-gray-300 rounded"
                            />
                            {submitted && !city && <p className="text-red-500">Enter an answer.</p>}
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="zipCode" className="block">Zip Code *</label>
                            <input
                                onChange={(e) => setZipCode(e.target.value)}
                                // onChange={handleChange}
                                id="zipCode"
                                name="zipCode"
                                type="text"
                                value={zipCode}
                                placeholder="Zip Code"
                                className="block w-full p-2 border border-gray-300 rounded"
                            />
                            {submitted && !zipCode && <p className="text-red-500">Enter an answer.</p>}
                        </div>
                    </div>

                    <div className="bg-slate-100 flex flex-col">
                        {error && !success &&
                            error.map((e, index) => (
                                <div
                                    key={index}
                                    className="text-red-600 px-5 py-2"
                                >
                                    {e}
                                </div>
                            ))}
                        {success && (
                            <div className="text-green-800 px-5 py-2">
                                Form submitted successfully!
                            </div>
                        )}
                    </div>

                    {/* <div className="bg-slate-100 flex flex-col">
                        {error &&
                        error.map((e) => (
                            <div
                            className={`${
                                success ? "text-green-800" : "text-red-600"
                            } px-5 py-2`}
                            >
                            {e}
                            </div>
                        ))}
                    </div> */}


                    <div className="flex justify-center items-center">
                        <button type="submit" className="bg-black text-white md:px-32 px-10 py-2 rounded-full">
                            Submit
                        </button>
                    </div>

                    {/* <div className="bg-slate-100 flex flex-col">
                        {error && !success &&
                            error.map((e, index) => (
                                <div
                                    key={index}
                                    className="text-red-600 px-5 py-2"
                                >
                                    {e}
                                </div>
                            ))}
                        {success && (
                            <div className="text-green-800 px-5 py-2">
                                Form submitted successfully!
                            </div>
                        )}
                    </div> */}


                </form>

            </div>
        </div>
    );
}

export default Contact_Us;

