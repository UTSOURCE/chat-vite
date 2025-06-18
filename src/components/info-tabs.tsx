import { Divider } from "@heroui/divider";
import { Tabs, Tab } from "@heroui/tabs";
import { PhoneIcon, MailIcon } from "lucide-react";

export const InfoTabs = () => {
  const tabs = [
    {
      id: "company",
      label: "公司",
      content: (
        <div className="p-4">
          <p className="text-sm text-default-600">
            UTSOURCE是电子元件领域的专业B2B和B4C工具采购商。UTSOURCE.net提供各种类型，如IC、模块、射频晶体管等，以及各种产品类型的PDF参数表和相关照片，我们还为客户提供满意的一站式服务。
          </p>
          <Divider className="my-4" />
          <div>
            <h4 className="font-bold text-md mb-3">免费电话:</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-default-500" size={16} />
                <span>+1(888) 766 5577 🇺🇸🇨🇦 (USA & Canada)</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-default-500" size={16} />
                <span>+52 5515436027 🇲🇽 (Mexico)</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-default-500" size={16} />
                <span>+49 15217848563 🇩🇪 (Germany)</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="text-default-500" size={16} />
                <span>sales@utsource.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-default-500" size={16} />
                <span>+1(657) 605-6198 (whatsapp)</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "qa",
      label: "Q&A",
      content: (
        <div className="p-4">
          <h4 className="font-bold text-md mb-2">常见问题</h4>
          <p className="text-sm text-default-600">
            这里是常见问题 (Q&A) 的内容。
          </p>
        </div>
      ),
    },
    {
      id: "history",
      label: "历史记录",
      content: (
        <div className="p-4">
          <h4 className="font-bold text-md mb-2">历史记录</h4>
          <p className="text-sm text-default-600">这里是历史记录的内容。</p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Tabs fullWidth aria-label="信息选项" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  );
};
