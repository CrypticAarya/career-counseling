const Lead = require('../models/Lead');

exports.submitLead = async (req, res) => {
  try {
    const { name, phone, email, percentile, colleges, branch, doubts } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const lead = await Lead.create({
      name,
      phone,
      email,
      percentile,
      colleges,
      branch,
      doubts
    });

    res.status(201).json({
      success: true,
      message: 'Lead submitted successfully',
      data: lead
    });
  } catch (error) {
    console.error('Error in submitLead:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.bookMentorship = async (req, res) => {
  try {
    const { leadId, collegeId, mentorshipType } = req.body;
    
    // In a real app, you'd link this to the lead
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
    const { transactionId, email } = req.body;
    
    // Find the latest lead by email and update payment status
    const lead = await Lead.findOneAndUpdate(
      { email },
      { isPaid: true, paymentStatus: 'completed', transactionId },
      { new: true, sort: { createdAt: -1 } }
    );
    
    res.status(200).json({
      success: true,
      message: 'Payment received. Our team will contact you shortly.',
      whatsappLink: 'https://wa.me/91XXXXXXXXXX'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Payment confirmation failed' });
  }
};
