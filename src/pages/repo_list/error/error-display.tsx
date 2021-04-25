import React from 'react';
import { ErrorDetails } from '../../../entities/error';
import "./error-display.scss"

interface Props {
    error: ErrorDetails;
}

export const ErrorDisplay = ({error}: Props) => {
    return (
    <div className="error-display-root">
        <h1>{error.status}</h1>
        <span>{error.message}</span>
    </div>);
}