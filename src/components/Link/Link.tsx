import React from "react";
import { Route, Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled.div<{ active: any }>`
    a {
        transition: color 0.2s, border-bottom-color 0.2s;
        color: ${props => props.active ? "#4078c0" : "#666"};
        text-decoration: none;
        border-bottom: 2px solid;
        border-bottom-color: ${props =>
            props.active ? "rgba(0, 0, 255, 0.1)" : "transparent"};
        &:hover, &:active, &:focus {
        color: ${props => props.active ? "##4078c0" : "#222"};
        }
    }
`;

interface LinkProps {
    path: string;
    exact?: any;
    title: string;
}

export const Link = ({ path, exact, title }: LinkProps) => (
    <Route
        path={path}
        exact={exact}
        children={({ match }) => (
        <NavLink active={match}>
            <RouterLink to={path}>{title}</RouterLink>
        </NavLink>
        )}
    />
);