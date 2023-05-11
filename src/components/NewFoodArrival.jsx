import Section from "./../Layout/Section";
import Title from "./../Layout/Title";

const NewFoodArrival = () => {
  return (
    <Section>
      <Title>Subscribe to newsletter</Title>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Newsletter!</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group text-center">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="name@gmail.com"
                  className="input input-bordered w-4/5"
                />
                <button className="btn btn-primary">Subscribe</button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default NewFoodArrival;
