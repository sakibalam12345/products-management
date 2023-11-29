

const Joinasemp = () => {

    const handleemplogin = e =>{
        e.preventDefault()
        const form = e.target;
        const fullname = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const dateofbirth = form.date.value;
        console.log(fullname,email,password,dateofbirth)
    }
  
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now as Employee!</h1> 
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleemplogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name="name" placeholder="Type Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="Password" name="password" placeholder="Password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date Of Birth</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Join as Employee</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Joinasemp;