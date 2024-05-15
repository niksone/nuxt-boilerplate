<template>
  <ul>
    <li>
      <Icon v-bind="getIcon(specialValid)" class="mr-1" size="24px" />
      At least one special character
    </li>
    <li>
      <Icon v-bind="getIcon(uppercaseValid)" class="mr-1" size="24px" /> At
      least one uppercase
    </li>
    <li>
      <Icon v-bind="getIcon(numberValid)" class="mr-1" size="24px" />
      At least one numeric
    </li>
    <li>
      <Icon v-bind="getIcon(charactersValid)" class="mr-1" size="24px" />
      Minimum 8 characters
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  password: {
    type: String,
    required: true,
  },
});

const {
  containsUppercase,
  containsCharacters,
  containsNumber,
  containsSpecial,
} = useValidation();

const uppercaseValid = computed(() => containsUppercase(props.password));
const charactersValid = computed(() => containsCharacters(props.password));
const numberValid = computed(() => containsNumber(props.password));
const specialValid = computed(() => containsSpecial(props.password));

const getIcon = (isCorrect: boolean) => {
  const name = isCorrect
    ? "mdi:check-circle-outline"
    : "mdi:close-circle-outline";

  const classes = isCorrect ? "text-green-600" : "text-red-600";

  return { name, class: classes };
};
</script>

<style scoped></style>
