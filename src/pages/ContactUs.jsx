import Layout from "./../Layout/Layout";
import Section from "./../Layout/Section";
import Title from "./../Layout/Title";
import Images from "./../util/Images";

const ContactUs = () => {
  return (
    <Layout>
      <Title>Contact us</Title>
      <Section>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img className="ml-10" src={Images.slideThree} alt="" />
            <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter your message"
                    className="input input-bordered p-10 h-[120px]"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactUs;
