export const formatCurrency = (
    amount: number,
    currencyCode: string = 'GBP',
) => {
    return (amount).toLocaleString('en-US', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};

export const formatCurrencyForHumans = (
    amount: number,
    currencyCode: string = 'GBP',
) => {
    const currencySymbol: string = formatCurrency(amount, currencyCode)
        .replace(/[0-9,.]/g, '')
        .trim();

    const formattedNumber = amount.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        notation: 'compact',
        compactDisplay: 'long',
    }).trim();

    return `${currencySymbol} ${formattedNumber}`;
}
