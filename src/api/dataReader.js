export const dataReader = (func, ...d) => {
    // keep data in a local variable so we can synchronously request it later
    let data;
    // keep track of progress and errors
    let status = 'pending';
    let error;

    // call the api function immediately, starting fetching
    const fetchingUser = func(...d)
        .then((user) => {
            data = user;
            status = 'done';
        })
        .catch((e) => {
            error = e;
            status = 'error';
        });

    // this is the data reader function that will return the data,
    // or throw if it's not ready or has errored
    return () => {
        if (status === 'pending') {
            throw fetchingUser;
        } else if (status === 'error') {
            throw error;
        }

        return data;
    }
};

export default dataReader;