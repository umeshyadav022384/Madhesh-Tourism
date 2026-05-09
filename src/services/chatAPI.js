// src/services/chatAPI.js
// Simple version - no backend needed, just for testing UI

export const sendMessage = async (message) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simple responses based on keywords
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hotel') || lowerMessage.includes('stay')) {
    return {
      answer: "🏨 We have great hotels in Siraha! Hotel Batika (NPR 800-1500) and Lahan Guest House (NPR 600-1200) are popular budget options. Hotel Makhan Bhog offers premium stay for NPR 2000-4000."
    };
  }
  
  if (lowerMessage.includes('temple') || lowerMessage.includes('mandir')) {
    return {
      answer: "🛕 Famous temples in Siraha include Salhesh Mandir in Lahan-12, Bhagawatisthan Durgamandir in Madar, and Kali Mandir in Siraha city center."
    };
  }
  
  if (lowerMessage.includes('food') || lowerMessage.includes('restaurant') || lowerMessage.includes('eat')) {
    return {
      answer: "🍽️ For authentic local food, try Madhesh Bhojanalaya (NPR 200-500). Saffron Restaurant offers multi-cuisine options. Lahan Fast Food is great for quick snacks!"
    };
  }
  
  if (lowerMessage.includes('best time') || lowerMessage.includes('visit') || lowerMessage.includes('season')) {
    return {
      answer: "📅 The best time to visit Siraha is from October to March when the weather is pleasant with temperatures between 15°C to 25°C. This period includes major festivals like Dashain, Tihar, and Chhath."
    };
  }
  
  // Default response
  return {
    answer: `Thanks for asking about "${message}". I can help you with information about hotels, temples, restaurants, best time to visit, and local attractions in Siraha and other Madhesh districts. What would you like to know?`
  };
};