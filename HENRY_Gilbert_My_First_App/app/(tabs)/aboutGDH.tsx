import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const quoteData = [
  { text: 'Patigekam ti pagtakem mo, ket napalabas ka ti tunggal kadakayo ti kalatiak.', author: 'Theodore Roosevelt' },
  { text: 'Awan kabaelan ti usto a bileg no saan ka nga agbuteng nga agpatuloy.', author: 'Confucius' },
  { text: 'Ti balligi saan nga awan-uray, ti pannakabigbig saan nga pannaka-awi: ti kina-nerbyoso nga agtuloy ti masapul.', author: 'Winston Churchill' },
  { text: 'Saan mo nga suruten ti oras; aramidem ti ar-aramiden na. Agpatuloy ka laeng.', author: 'Sam Levenson' },
  { text: 'Mabati amin a gunggunam no saan mo a sublian.', author: 'Wayne Gretzky' },
  { text: 'Dagiti rigat ket sagut kadagiti pangnasan a tao tapno mairugian ida iti naindaklan a kapapanan.', author: 'C.S. Lewis' },
  { text: 'Dream big and dare to fail.', author: 'Norman Vaughan' },
  { text: 'The only limit to our realization of tomorrow is our doubts of today.', author: 'Franklin D. Roosevelt' },
  { text: 'Act as if what you do makes a difference. It does.', author: 'William James' },
  { text: 'Success usually comes to those who are too busy to be looking for it.', author: 'Henry David Thoreau' },
  { text: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney' },
  { text: 'If you really look closely, most overnight successes took a long time.', author: 'Steve Jobs' },
  { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  { text: 'Do one thing every day that scares you.', author: 'Eleanor Roosevelt' },
  { text: 'Happiness is not something ready-made. It comes from your own actions.', author: 'Dalai Lama' },
  { text: 'In the middle of every difficulty lies opportunity.', author: 'Albert Einstein' },
  { text: 'Life is what happens when you’re busy making other plans.', author: 'John Lennon' },
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'Don’t be afraid to give up the good to go for the great.', author: 'John D. Rockefeller' },
  { text: 'Everything you’ve ever wanted is on the other side of fear.', author: 'George Addair' },
];


const App = () => {
  const [currentQuote, setCurrentQuote] = useState(quoteData[0]);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quoteData.length);
      setCurrentQuote(quoteData[randomIndex]);
      setShowTimer(true);
    }, 4000); // Change quote every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNextQuote = () => {
    setShowTimer(false);
  };

  return (
    <LinearGradient colors={['#7A288A', '#3E8E41']} style={styles.container}>
      <Text style={styles.title}>Inspirational Quotes</Text>
      <View style={styles.card}>
        <Text style={styles.quoteText}>“{currentQuote.text}”</Text>
        <Text style={styles.authorText}>- {currentQuote.author}</Text>
      </View>
      {showTimer && (
        <TouchableOpacity style={styles.timerButton} onPress={handleNextQuote}>
          <Text style={styles.timerText}>Next quote in 4 seconds</Text>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  quoteText: {
    fontSize: 18,
    marginBottom: 10,
  },
  authorText: {
    fontSize: 16,
    color: '#666',
  },
  timerButton: {
    backgroundColor: '#ff9800',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  timerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;