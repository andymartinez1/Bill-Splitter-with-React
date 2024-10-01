import { Button } from "./components/Button";
import { FormAddFriend } from "./components/FormAddFriend";
import { FormSplitBill } from "./components/FormSplitBill";
import { Friendslist } from "./components/FriendsList";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Friendslist />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
