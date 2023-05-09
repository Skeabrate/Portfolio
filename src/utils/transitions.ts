export const duration = (isInView: boolean) => (isInView ? 0.5 : 0.2);
export const delay = (isInView: boolean, stagger = 0) => (isInView ? 0.3 + stagger : 0);
export const opacity = (isInView: boolean) => (isInView ? 1 : 0);
export const translate = (isInView: boolean) => (isInView ? 'translateY(0)' : 'translateY(1vw)');
