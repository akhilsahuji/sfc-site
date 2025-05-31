<template>
  <div class="staff-card">
    <div class="staff-image">
      <img :src="image" :alt="name" />
    </div>
    <div class="staff-info">
      <h3 class="staff-name">{{ name }}</h3>
      <p class="staff-position">{{ position }}</p>
      <p class="staff-department" v-if="department">{{ department }}</p>
      <p class="staff-bio" v-if="bio">{{ bio }}</p>
      <div class="staff-contact" v-if="email || phone">
        <p v-if="email"><strong>Email:</strong> {{ email }}</p>
        <p v-if="phone"><strong>Phone:</strong> {{ phone }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'StaffCard',
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    department: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.staff-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.staff-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.staff-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.staff-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.staff-info {
  padding: 25px;
}

.staff-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c5aa0;
  margin-bottom: 8px;
}

.staff-position {
  font-size: 1.1rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 5px;
}

.staff-department {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 15px;
}

.staff-bio {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
}

.staff-contact {
  border-top: 1px solid #eee;
  padding-top: 15px;
}

.staff-contact p {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #666;
}

.staff-contact strong {
  color: #333;
}
</style> 