import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllProjects from './AllProjects'
import ProjectDiv from './ProjectDiv'

// The Roster component matches one of two different routes
// depending on the full pathname
export const Projects = () => (
  <Switch>
    <Route exact path='/web/projects' component={AllProjects} />
    <Route path='/web/projects/:project' component={ProjectDiv} />
  </Switch>
)
