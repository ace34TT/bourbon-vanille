import vanilla from "./../assets/Vanilla-png-1-min.png";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import * as Yup from "yup";
export const Contact = () => {
  const contactSchema = {
    fullName: Yup.string().required("Champs obligatoire").min(4),
    email: Yup.string().email().required("Champs obligatoire"),
    message: Yup.string().min(10).required("Champs obligatoire"),
  };
  return (
    <>
      <div className="playfair-display flex h-fit bg-primary py-20 lg:my-0 lg:h-fit 2xl:h-screen">
        <div className="sr-only flex flex-1 items-center justify-center lg:not-sr-only">
          <img src={vanilla} className="lg:h-[800px] 2xl:h-full" alt="" />
        </div>
        <div className="prose flex h-full max-w-none flex-1 flex-col justify-center lg:px-16 ">
          <div className="mx-5 mt-10 flex flex-col rounded-2xl bg-secondary p-8 lg:p-10 2xl:p-20">
            <h1 className="playfair-display text-primary">
              Formulaire de contact
            </h1>
            <p className="playfair-display mt-0 font-medium">
              Nous sommes toujours heureux de recevoir vos messages. N’hésitez
              pas à nous contacter via le formulaire ci-dessous pour toute
              question ou suggestion. Nous répondrons rapidement. Merci de votre
              intérêt !
            </p>
            <Formik
              initialValues={{ fullName: "", email: "", message: "" }}
              validationSchema={contactSchema}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onSubmit={async () => {}}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="fullName" className="font-bold">
                        Nom <span className="text-red-700">*</span>
                      </label>
                      <div className="relative w-full">
                        <Field
                          type="text"
                          name="fullName"
                          className="w-full rounded-lg border border-primary bg-secondary py-2 pl-10 pr-3"
                        />
                        <AiOutlineUser className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-600" />
                      </div>
                      <div className="h-4 text-red-500">
                        <ErrorMessage
                          name="fullName"
                          component="p"
                          className="m-0 p-0"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="email" className="font-bold">
                        Email <span className="text-red-700">*</span>
                      </label>
                      <div className="relative w-full">
                        <label htmlFor="email"></label>
                        <Field
                          type="email"
                          name="email"
                          className="w-full rounded-lg border border-primary bg-secondary py-2 pl-10 pr-3"
                        />
                        <AiOutlineMail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform" />
                      </div>
                      <div className="h-4 text-red-500">
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="m-0 p-0"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="message" className="font-bold">
                        Message <span className="text-red-700">*</span>
                      </label>
                      <div className="relative w-full">
                        <label htmlFor="message"></label>
                        <Field
                          as="textarea"
                          name="message"
                          className="w-full rounded-lg border border-primary bg-secondary py-2 pl-4 pr-3"
                        />
                      </div>
                      <div className="h-4 text-red-500">
                        <ErrorMessage
                          name="message"
                          component="p"
                          className="m-0 p-0"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-40 rounded-2xl bg-primary py-2 font-bold text-secondary transition-all duration-150 hover:bg-[#2b4b40]"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-center bg-primary">
        <div className="h-px w-1/2 bg-secondary"></div>
      </div>
    </>
  );
};
