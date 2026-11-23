import React, { Fragment } from 'react';

type MotionProps = {
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
  whileInView?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  viewport?: unknown;
};

function stripMotionProps<P extends MotionProps>(props: P) {
  const {
    initial,
    animate,
    exit,
    transition,
    whileInView,
    whileHover,
    whileTap,
    viewport,
    ...rest
  } = props;

  void initial;
  void animate;
  void exit;
  void transition;
  void whileInView;
  void whileHover;
  void whileTap;
  void viewport;

  return rest;
}

export function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <Fragment>{children}</Fragment>;
}

export const motion = {
  div: (props: React.HTMLAttributes<HTMLDivElement> & MotionProps) => (
    <div {...stripMotionProps(props)} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement> & MotionProps) => (
    <p {...stripMotionProps(props)} />
  ),
  span: (props: React.HTMLAttributes<HTMLSpanElement> & MotionProps) => (
    <span {...stripMotionProps(props)} />
  ),
  button: (props: React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps) => (
    <button {...stripMotionProps(props)} />
  ),
};
