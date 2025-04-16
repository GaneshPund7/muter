app.post('/sign-up/login', async (req, res) => {
    const { email, googleUser } = req.body;
  
    try {
      let user = await User.findOne({ email });
  
      if (!user) {
        // If Google user and not in DB, create new user
        if (googleUser) {
          user = new User({ email, isGoogleUser: true });
          await user.save();
          return res.status(200).json({ message: 'Google user created and logged in', user });
        }
  
        return res.status(400).json({ message: 'User not found' });
      }
  
      // Normal or Google login — success
      res.status(200).json({ message: 'User logged in', user });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  