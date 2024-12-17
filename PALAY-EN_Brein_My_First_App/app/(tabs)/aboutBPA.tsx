import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const quoteData = [
  { text: 'Believe you can and you are halfway there.', author: 'Theodore Roosevelt' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.', author: 'Winston Churchill' },
  { text: 'Don’t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
  { text: 'You miss 100% of the shots you don’t take.', author: 'Wayne Gretzky' },
  { text: 'Hardships often prepare ordinary people for an extraordinary destiny.', author: 'C.S. Lewis' },
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