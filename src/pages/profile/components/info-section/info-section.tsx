import { Divider, InputAdornment, TextField } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FC } from "react";
import { Control, FieldValues } from "react-hook-form";
import slackIcon from '../../../../assets/slack-icon.png';
import "./info-section.scss";

interface InfoSectionProps {
  control: Control<FieldValues, any>;
}

export const InfoSection: FC<InfoSectionProps> = () => {
  return (
    <div className="info-section">
      <div className="first-section-info">
        <h2 className="general-title">General Info</h2>
        <div className="row-general">
          <TextField
            className="name-input"
            label="First name"
            variant="standard"
            autoComplete="off"
          />
          <TextField
            className="name-input"
            label="Last name"
            variant="standard"
            autoComplete="off"
          />
        </div>
        <div className="row-general">
          <TextField
            className="contact-input"
            label="Email"
            variant="standard"
            autoComplete="off"
            disabled
          />
          <TextField
            className="contact-input"
            label="Personal Email"
            variant="standard"
            autoComplete="off"
          />
          <TextField
            className="contact-input"
            label="Mobile Phone"
            variant="standard"
            autoComplete="off"
          />
        </div>
        <div className="row-general">
          <TextField
            className="absences-input"
            label="Absences"
            variant="standard"
            autoComplete="off"
          />
        </div>
      </div>
      <Divider orientation="vertical" className="divider" />
      <div className="second-section-info">
        <h2 className="account-title">My accounts</h2>
        <TextField
          className="account-input"
          label="Slack"
          placeholder="Enter your slack user name"
          variant="standard"
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={slackIcon} className="slack-icon"/>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="account-input"
          label="Github"
          placeholder="Enter your github user name"
          variant="standard"
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GitHubIcon className="github-icon"/>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};
