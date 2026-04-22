const ContactCTA = () => {
  return (
    <section id="contact" className="bg-primary">
      <div className="container-custom py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Bring Your Ideas to Life?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Let's discuss your next printing project. Our team is here to help you create something extraordinary.
        </p>
        <a
          href="mailto:hello@modoprint.com"
          className="inline-block bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;