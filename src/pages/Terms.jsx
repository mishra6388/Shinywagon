import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions of Service</h1>
      <p className="mb-6 text-sm text-gray-600">Effective Date: April 7, 2025</p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Service Overview</h2>
        <p>
          ShinyWagon offers premium car wash and detailing services delivered
          directly to your doorstep. All bookings are subject to confirmation
          based on availability.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Booking and Cancellation</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Bookings can be made through our website, mobile app, or helpline.</li>
          <li>Appointments must be scheduled at least 2 hours in advance.</li>
          <li>Cancellations or rescheduling must be done at least 12 hours prior to the appointment.</li>
          <li>Late cancellations may be subject to a nominal cancellation fee.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Service Conditions</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Vehicle must be parked in a location that is easily accessible and safe.</li>
          <li>Customer must provide access to water and electricity if required.</li>
          <li>ShinyWagon reserves the right to cancel service if the environment is deemed unsafe or inaccessible.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Pricing and Payment</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Pricing is based on vehicle type and location.</li>
          <li>Payment can be made online via UPI, card, or cash after service completion.</li>
          <li>Extra charges may apply for extremely dirty vehicles or special services.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Liability and Damage</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>ShinyWagon is not responsible for pre-existing damages or valuables left inside the vehicle.</li>
          <li>Any damage caused during service must be reported within 24 hours with supporting evidence.</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Service Guarantee</h2>
        <p>
          If you're not satisfied with our service, please contact us within 24 hours.
          We may offer a free rewash or alternative resolution at our discretion.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Force Majeure</h2>
        <p>
          ShinyWagon is not liable for delays or failure in service delivery caused by events beyond our control,
          such as natural disasters, extreme weather, or technical issues.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Privacy</h2>
        <p>
          Your personal information is handled in accordance with our Privacy Policy. We do not share your data
          without your consent, except as required by law.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Modifications</h2>
        <p>
          ShinyWagon reserves the right to update these terms at any time. Continued use of our services implies
          acceptance of the updated terms.
        </p>
      </section>

      {/* Section 10 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          For inquiries, support, or feedback, reach out to us:
        </p>
        <ul className="list-none pl-0 mt-2">
          <li>📧 Email: <a href="shinywagon.co@gmail.com" className="text-blue-600">shinywagon.co@gmail.com</a></li>
          <li>📞 Phone: +91-9876543210</li>
          <li>🌐 Website: <a href="https://www.shinywagon.in" className="text-blue-600" target="_blank" rel="noopener noreferrer">www.shinywagon.in</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Terms;
