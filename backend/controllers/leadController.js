// In a real MVP, you might use Supabase or MongoDB here.
// For now, let's just log and return success to keep it moving.

exports.submitLead = async (req, res) => {
  try {
    const { name, phone, email, percentile, colleges, branch } = req.body;

    // Simple validation
    if (!name || !phone || !email) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    console.log('New Lead Received:', { name, phone, email, percentile, colleges, branch });

    // TODO: Store in DB
    
    res.status(201).json({
      success: true,
      message: 'Lead submitted successfully',
      data: { name, email }
    });
  } catch (error) {
    console.error('Error in submitLead:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.bookMentorship = async (req, res) => {
  try {
    const { leadId, collegeId, mentorshipType } = req.body;
    
    console.log('Mentorship Booking:', { leadId, collegeId, mentorshipType });
    
    res.status(200).json({
      success: true,
      message: 'Mentorship session initiated',
      paymentAmount: 99
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to initiate booking' });
  }
};

exports.confirmPayment = async (req, res) => {
  try {
    const { transactionId, screenshotUrl } = req.body;
    
    console.log('Payment Confirmation Received:', { transactionId });
    
    res.status(200).json({
      success: true,
      message: 'Payment received. Redirecting to WhatsApp...',
      whatsappLink: 'https://wa.me/91XXXXXXXXXX'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Payment confirmation failed' });
  }
};
