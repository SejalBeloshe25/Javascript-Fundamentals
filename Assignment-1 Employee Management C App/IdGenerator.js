const createIdGenerator = (prefix = "EMP" ) => {
    let count = 100;

    return () => {
        count++;
        return `${prefix}-${count}`;
    };

};

export const generateId = createIdGenerator();
