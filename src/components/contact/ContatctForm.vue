<script setup>
import { ref, reactive } from "vue";
import subjects from "@/data/contact/subjects";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const form = reactive({
  subject: "",
  message: "",
  newsletter: false,
});

function handleSubmit() {
  const payload = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    subject: form.subject,
    message: form.message,
    newsletter: form.newsletter,
  };

  console.log("Form submitted:", payload);
}
</script>

<template>
  <section
    class="py-24 lg:py-32 bg-white flex flex-col items-center justify-center"
  >
    <div class="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
      <div class="flex flex-col gap-6 text-center">
        <h2 class="font-serif text-4xl md:text-5xl font-bold">
          Send Us a Message
        </h2>
        <p class="text-lg text-[#1A1A1A]/70">
          Have a specific question or inquiry? Fill out the form below and we'll
          get back to you personally.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label
              for="firstName"
              class="block text-sm font-medium text-[#1A1A1A]"
              >First Name</label
            >
            <input
              v-model="firstName"
              type="text"
              id="firstName"
              required
              class="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B89B74] focus:border-transparent transition-colors"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label
              for="lastName"
              class="block text-sm font-medium text-[#1A1A1A]"
              >Last Name</label
            >
            <input
              v-model="lastName"
              type="text"
              id="lastName"
              required
              class="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B89B74] focus:border-transparent transition-colors"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="email" class="block text-sm font-medium text-[#1A1A1A]"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            required
            class="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B89B74] focus:border-transparent transition-colors"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="subject" class="block text-sm font-medium text-[#1A1A1A]">
            Subject *
          </label>
          <select
            v-model="form.subject"
            id="subject"
            required
            class="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B89B74] focus:border-transparent transition-colors"
          >
            <option value="">Select a subject</option>
            <option
              v-for="subject in subjects"
              :key="subject.value"
              :value="subject.value"
            >
              {{ subject.label }}
            </option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label for="message" class="block text-sm font-medium text-[#1A1A1A]">
            Message
          </label>

          <textarea
            v-model="form.message"
            id="message"
            rows="6"
            required
            class="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B89B74] focus:border-transparent transition-colors resize-none"
            placeholder="Tell us how we can help you..."
          ></textarea>
        </div>

        <div class="flex items-start gap-3">
          <input
            v-model="form.newsletter"
            type="checkbox"
            id="newsletter"
            class="w-4 h-4 text-[#B89B74] border-[#D1D5DB] rounded focus:ring-[#B89B74]"
          />
          <label for="newsletter" class="text-sm text-[#1A1A1A]/70">
            I'd like to receive updates about new collections, sustainability
            initiatives, and exclusive offers.
          </label>
        </div>

        <div class="text-center">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="bg-[#B89B74] text-white px-12 py-4 text-sm font-medium tracking-wide uppercase hover:bg-[#A08A6D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? "Sending..." : "Send Message" }}
          </button>
        </div>
      </form>

      <div v-if="submitMessage" class="mt-8 text-center">
        <div
          class="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-lg"
        >
          <i class="material-icons w-5 h-5 text-green-600">check</i>
          <span class="text-green-800">{{ submitMessage }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
