import * as Yup from 'yup'

const BuyProductValidation = Yup.object().shape({
    premium: Yup.string().required('Premium is required'),
    ageLimit: Yup.string().required('Age Limit is required'),
    policyPeriod: Yup.string().required('Policy Period is required'),
    paymentFrequency: Yup.string().required('Payment Frequency is required'),
    premuimSumAssured: Yup.string().required('Premuim Sum Assured is required'),
})

export default BuyProductValidation