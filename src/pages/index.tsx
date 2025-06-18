import { useState, useEffect, useRef } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { SendIcon, PaperclipIcon } from "lucide-react";

import DefaultLayout from "@/layouts/default";
import { ChatMessage, SystemMessage } from "@/components/chat-message";
import { InfoTabs } from "@/components/info-tabs";
import { ContactList, Contact } from "@/components/contact-list";

// 为演示准备一些模拟数据
const mockContacts: Contact[] = [
  {
    id: "contact-1",
    name: "客户服务",
    avatar: "https://i.pravatar.cc/150?u=judy",
    lastMessage: "客服 Judy 为您服务, 请问你有什么问题？",
    time: "10:54",
    unread: 2,
  },
  {
    id: "contact-2",
    name: "技术支持",
    avatar: "https://i.pravatar.cc/150?u=tech",
    lastMessage: "好的，我们正在查看您的问题。",
    time: "09:30",
    unread: 0,
  },
  {
    id: "contact-3",
    name: "退货部门",
    avatar: "https://i.pravatar.cc/150?u=returns",
    lastMessage: "您的退货申请已收到。",
    time: "昨天",
    unread: 0,
  },
];

// 模拟不同联系人的聊天记录
const mockMessages: any = {
  "contact-1": [
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "客服 Judy",
      isSender: false,
      text: "客服 Judy 为您服务, 请问你有什么问题？",
      time: "2025-06-16 10:54:23",
      avatar: "https://i.pravatar.cc/150?u=judy",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    {
      type: "chat",
      from: "germany",
      isSender: true,
      text: "everything seems to work correctly",
      time: "2024-11-19 17:25:06",
      avatar: "https://i.pravatar.cc/150?u=germany_1",
    },
    { type: "system", text: "Judy 下线了" },
  ],
  "contact-2": [
    {
      type: "chat",
      from: "技术支持",
      isSender: false,
      text: "技术支持为您服务，请描述您遇到的技术问题。",
      time: "09:30",
      avatar: "https://i.pravatar.cc/150?u=tech",
    },
  ],
  "contact-3": [
    {
      type: "chat",
      from: "退货部门",
      isSender: false,
      text: "您的退货申请已收到。",
      time: "昨天",
      avatar: "https://i.pravatar.cc/150?u=returns",
    },
  ],
};

export default function SupportPage() {
  const [selectedContactId, setSelectedContactId] = useState<string>(
    mockContacts[0].id,
  );
  // 1. 创建一个 ref 用于指向聊天记录的末尾
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedContact = mockContacts.find((c) => c.id === selectedContactId);
  const messages = mockMessages[selectedContactId] || [];

  // 2. 创建一个 effect，每当消息列表变化时，自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" }); // 使用 auto 立即滚动
  }, [messages, selectedContactId]); // 依赖项包含 selectedContactId 以确保切换联系人时也滚动

  return (
    <DefaultLayout>
      <div className="flex h-[calc(100vh-4rem)]">
        {" "}
        {/* 调整为全屏高度布局 */}
        {/* 左侧联系人列表 */}
        <ContactList
          contacts={mockContacts}
          selectedContactId={selectedContactId}
          onSelectContact={setSelectedContactId}
        />
        {/* 中间聊天窗口 */}
        <div className="flex-1 flex flex-col border-r">
          {selectedContact ? (
            <>
              {/* 头部：显示当前聊天对象 */}
              <div className="p-4 border-b bg-default-50 dark:bg-default-100">
                <h2 className="text-lg font-bold">{selectedContact.name}</h2>
                <p className="text-sm text-danger">客户服务不在线</p>
              </div>

              {/* 聊天记录 */}
              <div className="flex-1 p-4 overflow-y-auto bg-background">
                {messages.map((msg: any, index: any) => {
                  if (msg.type === "system") {
                    return (
                      <SystemMessage key={index}>{msg.text}</SystemMessage>
                    );
                  }
                  // 断言 msg 的类型为聊天消息类型
                  const chatMsg = msg as {
                    from: string;
                    isSender: boolean;
                    text: string;
                    time: string;
                    avatar: string;
                  };

                  return (
                    <ChatMessage
                      key={index}
                      avatar={chatMsg.avatar}
                      isSender={chatMsg.isSender}
                      name={chatMsg.from}
                      time={chatMsg.time}
                    >
                      {chatMsg.text}
                    </ChatMessage>
                  );
                })}
                {/* 3. 将 ref 附加到这个空的 div 上，它始终位于消息列表的末尾 */}
                <div ref={messagesEndRef} />
              </div>

              {/* 输入区域 */}
              <div className="p-4 border-t bg-default-50 dark:bg-default-100">
                <Input
                  fullWidth
                  endContent={
                    <div className="flex items-center gap-2">
                      <Button isIconOnly variant="light">
                        <PaperclipIcon className="text-default-500" size={20} />
                      </Button>
                      <Button isIconOnly variant="light">
                        <SendIcon className="text-default-500" size={20} />
                      </Button>
                    </div>
                  }
                  placeholder="请输入您要咨询的问题..."
                />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-default-500">请从左侧选择一个对话</p>
            </div>
          )}
        </div>
        {/* 右侧信息栏 */}
        <div className="hidden lg:block w-[300px] flex-shrink-0 bg-[#f8f8f8]">
          <InfoTabs />
        </div>
      </div>
    </DefaultLayout>
  );
}
