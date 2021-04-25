import React from 'react';
import { StarOutline } from '@material-ui/icons';
import { Repository } from '../../../../entities/repository';
import "./repository-item.scss";

interface Props {
    repository: Repository
}

export const RepositoryItem = ({ repository }: Props) => {
    return (
        <div className="repository-item-root">
            <span className="repository-name">{repository.name}</span>
            <span className="stars-count">
                <StarOutline />
                <span>
                    {repository.stargazers_count}
                </span>
            </span>
        </div>
    );
}