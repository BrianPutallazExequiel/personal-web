//

const createAdaptedUser = (user) => {
    const formattedUser = {
        name: user.name,
        lastName: user.last_name
    };
    return formattedUser;
};