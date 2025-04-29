<script>
  import NavigationSection from '@/components/shop-view/sections/NavigationSection.vue';
  import LogoSection from '@/components/shop-view/sections/LogoSection.vue';

  export default{
    components: { NavigationSection, LogoSection },
    data () {
      return {
        data: [
          { email: 'orders@socia-gn.com', emailInfo: 'info@socia-gn.com' },
        ],


      }

    },
  }

</script>

<template>
  <LogoSection />
  <v-card class="p-6 space-y-6" flat>

    <v-container>

      <v-col class="d-flex justify-center">
        <section>
          <h1 class="text-2xl font-bold mb-4">TERMS & CONDITIONS / FAQ</h1>

          <h2 class="text-xl font-semibold mt-6 mb-2">Return Policy</h2>
          <p><b>All sales are final.</b> No refunds or exchanges.</p>

          <h2 class="text-xl font-semibold mt-6 mb-2">Customer Service</h2>
          <p>Customer service hours are <b>Monday–Friday, 10AM–5PM CET.</b> Please allow up to two business days for a response.</p>

          <h2 class="text-xl font-semibold mt-6 mb-2">Shipping</h2>
          <p>We now offer <b>international shipping.</b> Please allow up to 5 business days for your order to process and 3–5 business days for shipping.
            (You'll receive a shipping confirmation email the day your order ships out.) Please be patient — we are a small operation.
            We are not responsible for any lost, missing, or stolen packages. If your order is lost in transit, please reach out to the shipping carrier directly.</p>

          <h1 class="text-2xl font-bold mt-10 mb-4">FREQUENTLY ASKED QUESTIONS (FAQ)</h1>

          <h2 class="text-xl font-semibold mt-6 mb-2">I have a general question. How do I contact you?</h2>
          <p>Email <b> {{ data[0].emailInfo }} </b> for general inquiries and <b>{{ data[0].email }}</b> for anything order-related.</p>

          <h2 class="text-xl font-semibold mt-6 mb-2">Can I get a refund or exchange?</h2>
          <p>No. <b>All sales are final.</b> Please double-check your cart before completing your purchase.</p>

          <h2 class="text-xl font-semibold mt-6 mb-2">I entered the wrong shipping address. Can you fix it?</h2>
          <p>If you need to change your shipping address, email <b>{{ data[0].email }}</b> immediately with your <b>ORDER NUMBER.</b>
            Once an order is shipped, we cannot reroute or resend it.</p>

          <h2 class="text-xl font-semibold mt-6 mb-2">I ordered the wrong size. Can I exchange it?</h2>
          <p><b>No.</b> Please make sure you review your order carefully before checking out — we are not responsible for order mistakes.</p>

          <h2 class="text-xl font-semibold mt-6 mb-2">I received the wrong size or item. What should I do?</h2>
          <p>If we sent you the wrong item, you can send it back to the return address. Email <b>{{ data[0].email }}</b> with your transaction ID or the email you used to place the order, and we’ll send you the correct item.</p>

          <h2 class="text-xl font-semibold mt-6 mb-2">When do you restock items?</h2>
          <p>Some items may restock, others may not. Any <b>restock announcements</b> will be posted on our Instagram page.</p>

          <h2 class="text-xl font-semibold mt-6 mb-2">I live outside of Germany. Can I still order?</h2>
          <p><b>Yes!</b> We now ship internationally to select countries.</p>
        </section>
      </v-col>

    </v-container>
  </v-card>
  <NavigationSection />
</template>

<style scoped>
/* Optional: add some styling */
p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
h1, h2 {
  color: #8c96ff; /* Ersetze dies mit der gewünschten Farbe */
}
</style>
