import React from 'react';
import DefaultHeader from './DefaultHeader';
import FancyHeader from './FancyHeader';
import MinimalistHeader from './MinimalistHeader';

const layoutHeaderComponent = {
    default: DefaultHeader,
    fancy: FancyHeader,
    minimalist: MinimalistHeader
};

const App = ({ headerType }) => {
    const HeaderComponent = layoutHeaderComponent[headerType] || DefaultHeader;

    return (
        <div>
            <HeaderComponent />
            {/* Rest of your app */}
        </div>
    );
};

// Usage example
<App headerType="fancy" /> 
// This will render the FancyHeader component
