import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const BuyProductInformation = (props:any) => {
  const formik = useFormik({
    initialValues: {
      premium: "",
      ageLimit: "",
      policyTerm: "",
      paymentFrequency: "",
      premiumSumAssured: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="h-screen">
      <div>
      <section className="w-[100%] px-6 bg-[#fbfbfb] pt-5 pb-8 border-t border-[#e8e8e8]">
        <div className=" mx-auto">
          <div className="flex justify-between">
            <h1 className=" text-lg md:text-2xl text-red-800 font-medium md:font-bold">
              Whole Life Assurance
            </h1>
            <nav className="c-breadcrumb-1 -style-icons">
              <ol className="c-breadcrumb-1-inner flex items-center space-x-2">
                <li className="c-breadcrumb-1-item">
                  <a
                    href="https://custodianplc.com.ng"
                    className="c-breadcrumb-1-link flex items-center space-x-2 text-[#111111] bg-[#eeeef0] p-0 md:p-2 rounded"
                  >
                    <FontAwesomeIcon icon={faHome} color="#111" />
                  </a>
                </li>
                <li className="c-breadcrumb-1-item">
                  <a
                    href="#"
                    className="c-breadcrumb-1-link flex items-center space-x-2 text-sm text-black bg-[#eeeef0] gap-2 px-8 p-2 rounded"
                  >
                    <FontAwesomeIcon
                      className=" "
                      icon={faFileText}
                      color="#111111"
                    />
                    Life Insurance
                  </a>
                </li>
                <li className="c-breadcrumb-1-item">
                  <a
                    href="#"
                    className="c-breadcrumb-1-link flex items-center text-sm  text-white px-8 bg-red-700 p-2 rounded"
                  >
                    Wholelife Assurance
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      </div>

      <div className=" w-fit bg-gray-100 flex-col gap-8  items-center justify-center px-4 py-8 ">
        <div className="flex gap-4 ">
          <div className="flex flex-col">
            <select
              onChange={formik.handleChange}
              defaultValue={formik.values.paymentFrequency}
              name="paymentFrequency"
              className=" text-gray-400 py-3 w-[24rem] px-4"
            >
              <option> Frequency of Payment</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {formik.errors.paymentFrequency &&
              formik.touched.paymentFrequency && (
                <p className="text-[12px] capitalize text-[#ff3333]">
                  {formik.errors.paymentFrequency}
                </p>
              )}
          </div>
          <div className="flex flex-col">
            <select
              defaultValue={formik.values.policyTerm}
              onChange={formik.handleChange}
              name="policyTerm"
              className=" py-3 w-[24rem] px-4 text-gray-400"
            >
              <option>Policy Term</option>
              <option value="annually">Annually</option>
            </select>
            {formik.errors.policyTerm && formik.touched.policyTerm && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.policyTerm}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <select
              onChange={formik.handleChange}
              defaultValue={formik.values.ageLimit}
              name="ageLimit"
              className=" text-gray-400 py-3 w-[24rem] px-4"
            >
              <option> Age Limit</option>
              <option value="60">60</option>
              <option value="45">45</option>
              <option value="30">30</option>
            </select>
            {formik.errors.ageLimit && formik.touched.ageLimit && (
              <p className="text-[12px] capitalize text-[#ff3333]">
                {formik.errors.ageLimit}
              </p>
            )}
          </div>
        </div>
        <div className="flex mt-4 gap-4">
          <div className="flex gap-10 ml-4 w-[380px]">
            <div className="">
              <label className="text-gray-400 flex justify-start">
                Premium
              </label>
              <input
                onChange={formik.handleChange}
                name="premiumSumAssured"
                value="Premium"
                className="p-2 flex "
                type="radio"
              />
            </div>
            <div>
              <label className="text-gray-400 flex justify-start">
                Sum Assured
              </label>
              <input
                onChange={formik.handleChange}
                name="premiumSumAssured"
                value="Sum Assured"
                className="p-2 flex "
                type="radio"
              />
            </div>
          </div>
        </div>
        {formik.values.premiumSumAssured ? (
          <div>
            <div className="flex mt-4 gap-4">
              <div className="flex flex-col">
                <input
                  type="number"
                  className="py-3 text-gray-400  w-[24rem] px-4"
                  name={formik.values.premiumSumAssured}
                  placeholder={formik.values.premiumSumAssured}
                  defaultValue={formik.values.premiumSumAssured}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <div className="flex flex-col">
                <button className=" bg-green-600 px-[10rem] py-[.5rem] rounded-sm  hover:bg-[#444]/30 mr-5">
                  Calculate
                </button>
              </div>
            </div>
            <div className="flex mt-4 gap-4">
              <div className="flex flex-col">
                <input
                  type="number"
                  disabled={true}
                  className="py-3 bg-[#444]/25 w-[24rem] px-4"
                  name={formik.values.premiumSumAssured}
                  placeholder={
                    formik.values.premiumSumAssured === "Sum Assured"
                      ? "Premium"
                      : "Sum Assured"
                  }
                  defaultValue={formik.values.premiumSumAssured}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex gap-6 mt-6 justify-end">
        <button className=" bg-white font-semibold px-[2rem] border border-solid border-red-700 text-red-700 py-[10px] rounded-sm">
          Generate Quote
        </button>
        <button onClick={props.handleBuyProduct} className=" bg-red-700 px-[3rem] text-white py-[10px] rounded-sm">
          Buy Product
        </button>
      </div>
    </div>
  );
};

export default BuyProductInformation;
