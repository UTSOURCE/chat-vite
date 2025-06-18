import React from "react";
import { Avatar } from "@heroui/avatar";
import clsx from "clsx";

// 定义了“联系人”的数据结构，方便在不同组件间传递
export type Contact = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
};

// 定义了组件所需要接收的属性（props）
type ContactListProps = {
  contacts: Contact[];
  selectedContactId: string;
  onSelectContact: (id: string) => void;
};

export const ContactList: React.FC<ContactListProps> = ({
  contacts,
  selectedContactId,
  onSelectContact,
}) => {
  return (
    <div className="w-full md:w-1/3 lg:w-[320px] border-r bg-default-50 dark:bg-default-100 flex flex-col">
      {/* 列表头部 */}
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">消息</h2>
        {/* 在这里可以添加一个搜索框 */}
      </div>

      {/* 联系人滚动列表 */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={clsx(
              "flex items-center gap-4 p-3 cursor-pointer border-b border-transparent hover:bg-default-200 dark:hover:bg-default-50",
              // 如果当前联系人被选中，则添加高亮背景色
              selectedContactId === contact.id
                ? "bg-default-200 dark:bg-default-50"
                : "border-b-default-100 dark:border-b-default-200",
            )}
            onClick={() => onSelectContact(contact.id)}
          >
            <Avatar size="lg" src={contact.avatar} />
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm truncate">{contact.name}</p>
                <p className="text-xs text-default-500 flex-shrink-0">
                  {contact.time}
                </p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-default-600 truncate">
                  {contact.lastMessage}
                </p>
                {/* 如果有未读消息，则显示红点计数 */}
                {contact.unread > 0 && (
                  <span className="bg-danger text-danger-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0">
                    {contact.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
