import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from 'react';
import ApiService from '../../api/ApiService';

const VerifyEmail = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [loading, setLoading] = useState(false);
    const email = state?.email; // Get the email passed from the signup form

    const formik = useFormik({
        initialValues: {
            email: email || '',
            verificationCode: '',
        },
        validationSchema: Yup.object({
            verificationCode: Yup.string().required('Verification Code is required'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await ApiService.auth('verifyEmail', values);

                if (response.success) {
                    alert('Email verified successfully.');
                    navigate('/login');
                } else {
                    alert(response.message);
                }
            } catch (error) {
                console.error(error);
                alert('Verification failed.');
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <section className="bg-white mt-10 text-black">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Verify Your Email
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formik.values.email}
                                    disabled // Email is passed from state and can't be changed
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                />
                            </div>
                            <div>
                                <label htmlFor="verificationCode" className="block mb-2 text-sm font-medium text-gray-900">
                                    Verification Code
                                </label>
                                <input
                                    type="text"
                                    name="verificationCode"
                                    id="verificationCode"
                                    value={formik.values.verificationCode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Enter code"
                                />
                                {formik.touched.verificationCode && formik.errors.verificationCode ? (
                                    <div className="text-red-500">{formik.errors.verificationCode}</div>
                                ) : null}
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-5 py-3 w-full text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg"
                            >
                                {loading ? 'Verifying...' : 'Verify'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerifyEmail;
