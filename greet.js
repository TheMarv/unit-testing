export function greet(userName = 'stranger') {
  const coachNames = ['Andrea', 'Gregor', 'Felix', 'Marc'];
  if (coachNames.includes(userName)) userName = 'Coach';
  return `Hello ${userName}!`;
}
