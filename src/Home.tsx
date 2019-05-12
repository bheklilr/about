import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    height: 100px;
`;

const NavItem = styled.li`
    flex-grow: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.75rem;
    font-weight: 700;

    transition: background-color 0.3s ease;
    &:hover {
        background-color: #3d3255;
    }
`;

const NavItemLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HomeContainer = styled.div`
    
`;

const Header = styled.div`
`;

const Section = styled.div`
    width: 100vw;
    padding-bottom: 20px;
`;

const Intro = styled(Section)`
    background-color: #332841;
`;

const Career = styled(Section)`
    background-color: #282a41;
`;

const Projects = styled(Section)`
    background-color: #242d3a;
`;

const Education = styled(Section)`
    background-color: #223038;
`

const Life = styled(Section)`
    background-color: #1c2c2e;
`

const Paragraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.25;
    text-align: justify;
    width: 75vw;
    margin: 0 auto;
    padding: 20px 0;
`;

const JobList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    width: 75vw;
    margin: 0 auto;
    padding: 20px 0;
`;

const Job = styled.li`
    display: grid;
    grid-template:
        "company    company .       start   end"    auto
        "title      title   title   title   title"  auto
        ".          role    role    role    role"   auto
        /1fr        3fr     3fr     3fr     3fr
        ;
    grid-row-gap: 10px;
    padding: 20px 0;
`;

const Company = styled.span`
    grid-area: company;
    font-weight: 700;
`;

const StartDate = styled.span`
    grid-area: start;
    font-size: 1.15rem;
    text-align: right;
`;

const EndDate = styled.span`
    grid-area: end;
    font-size: 1.15rem;
    text-align: right;
`;

const JobTitle = styled.span`
    grid-area: title;
    font-size: 1.25rem;
    font-weight: 700;
`;

const Role = styled.p`
    grid-area: role;
    font-size: 1.1rem;
    line-height: 1.25;
    text-align: justify;
    padding: 0;
    margin: 0;
`;

export default () => (
    <HomeContainer>
        <Header>
            <Nav>
                <NavItem><NavItemLink to="#intro">Me</NavItemLink></NavItem>
                <NavItem><NavItemLink to="#career">Career</NavItemLink></NavItem>
                <NavItem><NavItemLink to="#projects">Projects</NavItemLink></NavItem>
                <NavItem><NavItemLink to="#education">Education</NavItemLink></NavItem>
                <NavItem><NavItemLink to="#life">Life</NavItemLink></NavItem>
            </Nav>
        </Header>
        <Intro id="intro">
            <Paragraph>
                I am an electrical engineer who turned to the dark side of software engineering.
                Realizing the error of my ways, I have left the path of building circuits, systems,
                and gizmos for the more satisfying world of building applications and software
                systems.
            </Paragraph>
            <Paragraph>
                While I worked for a time as an engineer, in all honesty the job was still mainly
                software oriented, and only became more so over time as the team became more 
                specialized. As I became more experienced, I was also able to design and build
                a number of systems, tools, and platforms that boosted the capabilities of my
                teammates and coworkers. Through this, I discovered a passion for developing
                software.
            </Paragraph>
            <Paragraph>
                Now, I have abandoned my electrical engineering career in favor of software
                engineering, although I do still enjoy scientific computing and learning about
                physical systems that can be understood through the lens of software.
            </Paragraph>
        </Intro>
        <Career id="career">
            <JobList>
                <Job>
                    <Company>Southwest Power Pool</Company>
                    <StartDate>May 2018</StartDate>
                    <EndDate>Present</EndDate>
                    <JobTitle>Programmer/Analyst II</JobTitle>
                    <Role>Placeholder</Role>
                </Job>
                <Job>
                    <Company>Molex, LLC</Company>
                    <StartDate>Feb 2016</StartDate>
                    <EndDate>May 2018</EndDate>
                    <JobTitle>Software Engineer</JobTitle>
                    <Role>Placeholder</Role>
                </Job>
                <Job>
                    <Company>Molex, LLC</Company>
                    <StartDate>May 2013</StartDate>
                    <EndDate>Feb 2016</EndDate>
                    <JobTitle>Electrical Test Engineer</JobTitle>
                    <Role>Placeholder</Role>
                </Job>
            </JobList>
        </Career>
        <Projects id="projects">
            <Paragraph>
                Projects placeholder
            </Paragraph>
        </Projects>
        <Education id="education">
            <Paragraph>
                education placeholder
            </Paragraph>
        </Education>
        <Life id="life">
            <Paragraph>
                life placeholder
            </Paragraph>
        </Life>
    </HomeContainer>
)