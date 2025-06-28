import Header from '../components/Header';
import Timeline from '../components/Timeline';

export default function HomePage() {
  return (
    <main>
    <Header />
    <Timeline />
      {/* CONTACT US HERO */}
      {/*
      <div className="flex w-full flex-col">
        <div className="hero bg-base-300 min-h-screen" id="contact-us">
          <div className="card-body w-full max-w-3xl">
            <h2 className="card-title text-4xl font-bold">Contact Us</h2>
            <form id="contactForm" className="grid gap-10 pt-2" onSubmit="contact(event)">
              <div className="form-control">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full h-full " required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" name="email" placeholder="you@example.com" className="input input-bordered w-full h-full " required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Message</span></label>
                <textarea name="message" rows="5" placeholder="How can we help?" className="textarea textarea-bordered w-full h-full resize-none" required></textarea>
              </div>
              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary w-full">Send Us a Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      */}
    </main>
  );
}
