export const money = value =>
  Number(value || 0).toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
