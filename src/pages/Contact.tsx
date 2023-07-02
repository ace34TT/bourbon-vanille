import vanilla from "./../assets/Vanilla-png-1-min.png";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import * as Yup from "yup";
export const Contact = () => {
  const contactSchema = {
    fullName: Yup.string().required("Champs obligatoire").min(4),
    email: Yup.string().email().required("Champs obligatoire"),
    message: Yup.string().min(10).required("Champs obligatoire"),
  };
  return (
    <>
      <div className="h-screen bg-primary flex">
        <div className="flex-1 flex items-center justify-center">
          <img src={vanilla} className="h-full" alt="" />
        </div>
        <div className="flex-1 h-full flex flex-col justify-center prose max-w-none px-16 ">
          <div className="flex flex-col bg-secondary p-20 rounded-2xl mt-10">
            <h1>Formulaire de contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              possimus qui minima harum aliquam officia, non tenetur officiis
              voluptatibus vitae voluptates adipisci exercitationem autem cum
              veritatis nihil eaque quae nisi?
            </p>
            <Formik
              initialValues={{ fullName: "", email: "", message: "" }}
              validationSchema={contactSchema}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onSubmit={async (values, { setSubmitting }) => {}}
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
                          className="border border-primary bg-secondary rounded-lg pl-10 pr-3 py-2 w-full"
                        />
                        <AiOutlineMail className="absolute text-gray-600 left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                      <div className="h-4 text-red-500">
                        <ErrorMessage
                          name="fullName"
                          component="p"
                          className="p-0 m-0"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="email" className="font-bold">
                        email{" "}
                      </label>
                      <div className="relative w-full">
                        <label htmlFor="email"></label>
                        <Field
                          type="email"
                          name="email"
                          className="border border-primary bg-secondary rounded-lg pl-10 pr-3 py-2 w-full"
                        />
                        <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                      <div className="h-4 text-red-500">
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="p-0 m-0"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="message" className="font-bold">
                        message
                      </label>
                      <div className="relative w-full">
                        <label htmlFor="message"></label>
                        <Field
                          as="textarea"
                          name="message"
                          className="border border-primary bg-secondary rounded-lg pl-4 pr-3 py-2 w-full"
                        />
                      </div>
                      <div className="h-4 text-red-500">
                        <ErrorMessage
                          name="message"
                          component="p"
                          className="p-0 m-0"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-40 bg-primary text-white font-bold py-2 rounded-2xl"
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
        <div className="w-1/2 bg-secondary h-px"></div>
      </div>
    </>
  );
};