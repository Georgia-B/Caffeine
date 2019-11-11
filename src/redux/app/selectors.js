const getLoadingState = (state) => state.app.isLoading;
const getWelcomeMessage = (state) => state.app.welcomeMessage;

const appSelectors = {
    getLoadingState,
    getWelcomeMessage,
};

export default appSelectors;
