<template>
  <section class="daily-quote">
    <div class="quote-container">
      <blockquote class="quote-text">
        "{{ currentQuote.text }}"
      </blockquote>
      <cite class="quote-author">
        - {{ currentQuote.author }}
      </cite>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'DailyQuote',
  data() {
    return {
      quotes: [
        { text: "The mind is not a vessel to be filled, but a fire to be kindled.", author: "Plutarch" },
        { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
        { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
        { text: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
        { text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.", author: "Dr. Seuss" },
        { text: "Intelligence plus character—that is the goal of true education.", author: "Martin Luther King Jr." },
        { text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", author: "Malcolm X" },
        { text: "The function of education is to teach one to think intensively and to think critically.", author: "Martin Luther King Jr." },
        { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
        { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "William Butler Yeats" },
        { text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
        { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
        { text: "Education is the foundation upon which we build our future.", author: "Christine Gregoire" },
        { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.", author: "Aristotle" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Knowledge will give you power, but character respect.", author: "Bruce Lee" },
        { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
        { text: "Education is what remains after one has forgotten what one has learned in school.", author: "Albert Einstein" },
        { text: "Tell me and I forget, teach me and I may remember, involve me and I learn.", author: "Benjamin Franklin" },
        { text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.", author: "Brian Herbert" },
        { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
        { text: "The best teachers are those who show you where to look but don't tell you what to see.", author: "Alexandra K. Trenfor" },
        { text: "Teaching is the profession that teaches all the other professions.", author: "Unknown" },
        { text: "In learning you will teach, and in teaching you will learn.", author: "Phil Collins" },
        { text: "The greatest sign of success for a teacher is to be able to say, 'The children are now working as if I did not exist.'", author: "Maria Montessori" },
        { text: "What we learn with pleasure we never forget.", author: "Alfred Mercier" }
      ]
    }
  },
  computed: {
    currentQuote() {
      // Get current date and calculate day of year for daily rotation
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 0);
      const diff = now.getTime() - start.getTime();
      const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
      
      // Use modulo to cycle through quotes
      const quoteIndex = dayOfYear % this.quotes.length;
      return this.quotes[quoteIndex];
    }
  }
}
</script>

<style scoped>
.daily-quote {
  padding: var(--size-8) 0;
  text-align: center;
}

.quote-container {
  max-width: var(--size-content-3);
  margin: 0 auto;
  padding: 0 var(--size-6);
}

.quote-text {
  font-size: var(--font-size-4);
  line-height: var(--font-lineheight-3);
  font-style: italic;
  color: var(--vp-c-text-1);
  margin: 0 0 var(--size-3) 0;
  font-weight: var(--font-weight-4);
}

.quote-author {
  font-size: var(--font-size-2);
  color: var(--vp-c-text-2);
  font-weight: var(--font-weight-5);
  font-style: normal;
  text-align: right;
  display: block;
}

/* Responsive Design */
@media (width <= 768px) {
  .daily-quote {
    padding: var(--size-7) 0;
  }
  
  .quote-container {
    padding: 0 var(--size-5);
  }
  
  .quote-text {
    font-size: var(--font-size-3);
  }
  
  .quote-author {
    font-size: var(--font-size-1);
  }
}

@media (width <= 480px) {
  .daily-quote {
    padding: var(--size-6) 0;
  }
  
  .quote-container {
    padding: 0 var(--size-4);
  }
  
  .quote-text {
    font-size: var(--font-size-2);
  }
  
  .quote-author {
    font-size: var(--font-size-0);
  }
}
</style> 