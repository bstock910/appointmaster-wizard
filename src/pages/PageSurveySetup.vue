<template>
  <div class="container">
    <div class="spacer"></div>
    <h2 class="subtitle is-3 has-text-centered">Survey Setup</h2>
    <nav class="level">
      <div class="level-item has-text-centered" v-for="(title,index) in titles" :key="index">
        <button class="button is-fullwidth nav-button" :class="{'is-info': index === currentStepNumber - 1}">
          {{title}}
        </button>
      </div>
    </nav>
    <section class="section">
      <keep-alive>
        <component
          ref="currentStep"
          :is="currentStep">
        </component>
      </keep-alive>
    </section>
    <div class="buttons is-right">
      <button
        @click="goBack"
        v-if="currentStepNumber > 1"
        class="button is-info"
      >Back
      </button>
      <button
        @click="goNext"
        :disabled="!canGoNext"
        class="button is-info"
      >{{isLastStep ? 'Submit' : 'Next'}}</button>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
import SurveyHome from '@/components/survey/SurveyHome'
import SurveyQuestions from '@/components/survey/SurveyQuestions'
import SurveyAdditional from '@/components/survey/SurveyAdditional'
import SurveySummary from '@/components/survey/SurveySummary'

export default {
  components: {
    SurveyHome,
    SurveyQuestions,
    SurveyAdditional,
    SurveySummary
  },
  data () {
    return {
      currentStepNumber: 1,
      canGoNext: true,
      asyncState: null,
      steps: [
        'SurveyHome',
        'SurveyQuestions',
        'SurveyAdditional',
        'SurveySummary'
      ],
      titles: [
        'Getting Started',
        'Survey Questions',
        'Additional Settings',
        'Summary'
      ]
    }
  },
  computed: {
    isLastStep () {
      return this.currentStepNumber === this.length
    },
    inProgress () {
      return this.currentStepNumber <= this.length
    },
    length () {
      return this.steps.length
    },
    currentStep () {
      return this.steps[this.currentStepNumber - 1]
    },
    progress () {
      return (this.currentStepNumber / this.length) * 100
    }
  },
  methods: {
    goBack () {
      this.currentStepNumber--
      this.canGoNext = true
    },
    goNext () {
      this.currentStepNumber++
      this.$nextTick(() => {
        this.canGoNext = true
      })
    }
  }
}
</script>

<style scoped>

</style>
