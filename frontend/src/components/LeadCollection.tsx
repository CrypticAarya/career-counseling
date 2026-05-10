export const LeadCollection = () => {
  return (
    <section id="book" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-primary tracking-tight">
            Get Personalized College Guidance
          </h2>
          <p className="text-base md:text-xl text-accent-stone font-medium">
            Fill your details to connect with seniors from your dream college.
          </p>
        </div>

        <div className="premium-card p-6 md:p-10 relative overflow-hidden">
          <iframe
            src="https://form.typeform.com/to/FCvwTHyC"
            width="100%"
            height="600px"
            frameBorder="0"
            allow="camera; microphone; autoplay; encrypted-media;"
            title="College Guidance Form"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
