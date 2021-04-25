import React from 'react';
import { Repository } from '../../../entities/repository';
import { RepositoryItem } from './repository-item/repository-item';
import './repository-table.scss';

interface Props {
    repositories: Repository[];
}

export const RepositoryTable = ({ repositories }: Props) => {
    return (
        <div className="repository-table-root">
            <div className="table-container">
                { repositories.map((repo, index) =>
                    <RepositoryItem key={index} repository={repo} />
                )}
            </div>
        </div>
    );
}