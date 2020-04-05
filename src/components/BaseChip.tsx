import React from 'react';
import { createStyles, Theme, WithStyles, Chip, withStyles } from '@material-ui/core';

const BaseChipStyles = (theme: Theme) =>
  createStyles({
    root: ({ backgroundColor = 'yellow' }: BaseChipProps) => ({ backgroundColor }),
    label: ({ color = 'blue' }: BaseChipProps) => ({ color }),
  });

interface BaseChipProps extends WithStyles<typeof BaseChipStyles> {
  label: string;
  backgroundColor?: 'yellow' | 'orange';
  color?: 'blue' | 'green';
}

const BaseChipUnstyled = ({ label, classes }: BaseChipProps) => <Chip label={label} classes={classes} />;

export const BaseChip = withStyles(BaseChipStyles)(BaseChipUnstyled);
