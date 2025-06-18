import React from "react";
import clsx from "clsx";
import { Avatar } from "@heroui/avatar";

type ChatMessageProps = {
  avatar: string;
  name: string;
  time: string;
  isSender?: boolean;
  children: React.ReactNode;
};

export const ChatMessage: React.FC<ChatMessageProps> = ({
  avatar,
  name,
  time,
  isSender = false,
  children,
}) => {
  return (
    <div className={clsx("flex gap-3 my-4", isSender && "flex-row-reverse")}>
      <Avatar className="flex-shrink-0" src={avatar} />
      <div className={clsx("flex flex-col gap-1", isSender && "items-end")}>
        <div className="flex items-center gap-2 text-xs text-default-500">
          {!isSender && (
            <span className="font-semibold text-default-700">{name}</span>
          )}
          <span>{time}</span>
          {isSender && (
            <span className="font-semibold text-default-700">{name}</span>
          )}
        </div>
        <div
          className={clsx(
            "relative inline-block px-4 py-2 rounded-lg max-w-lg text-sm",
            isSender
              ? "bg-primary text-primary-foreground"
              : "bg-default-100 text-default-800",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SystemMessage = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center text-xs text-default-400 my-4">{children}</div>
);
