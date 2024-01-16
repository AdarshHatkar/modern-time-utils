export const getCurrentTimeStamp = (): number => {
    return Date.now();
};

export const getCurrentTimeStampInSeconds = (): number => {
    return Math.floor(getCurrentTimeStamp() / 1000);
};
