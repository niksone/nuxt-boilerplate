export default defineNuxtPlugin(() => {
  const { width } = useWindowSize();
  const breakpoints = {
    xs: [0, 599.99],
    sm: [600, 1023.99],
    md: [1024, 1439.99],
    lg: [1440, 1919.99],
    xl: [1920, Infinity],
  };
  // Extra small	xs	0px	599.99px
  // Small	sm	600px	1023.99px
  // Medium	md	1024px	1439.99px
  // Large	lg	1440px	1919.99px
  // Extra Large	xl	1920px
  return {
    provide: {
      breakpoints: computed(() => {
        const activeBreakpoints = Object.fromEntries(
          Object.entries(breakpoints).map(([breakpoint, [min, max]]) => [
            breakpoint,
            width.value > min && width.value < max,
          ])
        );

        const lowerThanBreakpoints = Object.fromEntries(
          Object.entries(breakpoints).map(([breakpoint, [min]]) => [
            breakpoint,
            width.value < min,
          ])
        );

        const greaterThanBreakpoints = Object.fromEntries(
          Object.entries(breakpoints).map(([breakpoint, [, max]]) => [
            breakpoint,
            width.value > max,
          ])
        );

        return {
          width: width.value,
          lt: lowerThanBreakpoints,
          gt: greaterThanBreakpoints,
          ...activeBreakpoints,
        };
      }),
      // hello: (msg: string) => `Hello ${msg}!`,
    },
  };
});
