import { combineUsersWithMessages, sortMessagesByDate } from './service';

describe('Testing the Service', () => {

  const messages = [
    {
      "id": "b03569ae-ccbf-4975-8040-4daba638b407",
      "userId": "16373df5-da0a-4074-8295-f916b94269f4",
      "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
      "timestamp": "2016-11-09T05:04:58Z"
    },
    {
      "id": "cd445e6d-e514-424f-ba8f-16ec842002c6",
      "userId": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
      "message": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      "timestamp": "2017-02-09T04:27:38Z"
    }
  ];

  const members = [
    {
      "id": "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
      "firstName": "Martin",
      "lastName": "Bradley",
      "email": "mbradley0@google.it",
      "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
      "ip": "166.124.172.160"
    },
    {
      "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
      "firstName": "Helen",
      "lastName": "Hawkins",
      "email": "hhawkins1@posterous.com",
      "avatar": "http://dummyimage.com/100x100.jpg/dddddd/000000",
      "ip": "179.239.189.173"
    }
  ];

  it('should combine users with messages', () => {
    const combinedMessages = combineUsersWithMessages(messages, members);
    expect(combinedMessages.length).toEqual(messages.length);
    expect(combinedMessages[0].user).toBe(undefined);
    expect(combinedMessages[1].user).not.toBe(undefined);
    expect(combinedMessages[1].user.id).toBe(members[1].id);
  });

  it('should sort messages by date', () => {
    const sortedMessages = [...messages].sort(sortMessagesByDate);
    expect(sortedMessages.length).toEqual(messages.length);
    expect(sortedMessages[0].id).toBe(messages[1].id);
    expect(sortedMessages[1].id).toBe(messages[0].id);
  });


});





