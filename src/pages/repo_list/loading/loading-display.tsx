import React from 'react';
import { CircularProgress } from '@material-ui/core';
import "./loading-display.scss";

export const LoadingDisplay = () => {
    return (
        <div className="loading-display-root">
            <CircularProgress />
        </div>
    )
}